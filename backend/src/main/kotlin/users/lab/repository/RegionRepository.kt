package users.lab.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import users.lab.model.Country
import users.lab.model.Region

@Repository
interface RegionRepository  : JpaRepository<Region?, Long?> {
    fun findByCountry(country: Country) : List<Region>
}