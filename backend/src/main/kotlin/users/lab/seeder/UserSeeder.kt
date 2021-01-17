package users.lab.seeder

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.event.EventListener
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component
import users.lab.model.Role
import users.lab.model.User
import users.lab.repository.CountryRepository
import users.lab.repository.RegionRepository
import users.lab.repository.UserRepository

@Component
class UserSeeder {
    private lateinit var userRepository: UserRepository
    private lateinit var countryRepository: CountryRepository
    private lateinit var regionRepository: RegionRepository

    @Autowired
    private val passwordEncoder: PasswordEncoder? = null

    @Autowired
    fun userSeeder(
        userRepository: UserRepository,
        countryRepository: CountryRepository,
        regionRepository: RegionRepository,
        jdbcTemplate: JdbcTemplate
    ) {
        this.userRepository = userRepository
        this.countryRepository = countryRepository
        this.regionRepository = regionRepository
    }

    @EventListener
    fun seed(event: ContextRefreshedEvent?) {
        seedUsersTable()
    }

    private fun seedUsersTable() {
        Role.values().forEach { role ->
            if ( role !== Role.NoRole) {
                val users = userRepository.findByRoleIs(role)
                if (users.isEmpty()) {
                    val user = User()
                    user.name = role.name
                    user.email = "${role.name}@mail.ru".toLowerCase()
                    user.role = role
                    user.password = (passwordEncoder!!.encode("password"))
                    user.emailVerified = true
                    userRepository.save(user)
                }
            }
        }
    }
}