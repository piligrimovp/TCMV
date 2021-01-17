package users.lab.repository

import users.lab.model.Country
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CountryRepository : JpaRepository<Country?, Long?> {
    fun findByNameIgnoreCaseIsContainingOrCode(name: String, code: String = name): List<Country>
    fun existsByName(email: String): Boolean
    fun findByCodeIgnoreCase(code: String): List<Country>
}