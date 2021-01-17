package users.lab.repository

import users.lab.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import users.lab.model.Role
import java.util.*

@Repository
interface UserRepository : JpaRepository<User?, Long?> {
    fun findByEmail(email: String?): Optional<User?>?
    fun existsByEmail(email: String?): Boolean?
    fun findByRoleIs(role: Role): List<User>
}

