package users.lab.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import users.lab.exception.BadRequestException
import users.lab.model.Region
import users.lab.repository.CountryRepository
import users.lab.repository.RegionRepository

@RestController
@RequestMapping("/region")
class RegionController {
    @Autowired
    private lateinit var regionRepository: RegionRepository

    @Autowired
    private lateinit var countryRepository: CountryRepository

    @GetMapping("/")
    fun getRegions(country: String): Set<Region> {
        val countryList = countryRepository.findByNameIgnoreCaseIsContainingOrCode(country)
        if (countryList.isNullOrEmpty()) {
            throw BadRequestException("Страна не определна.")
        }
        return countryList.first().region
    }
}