package users.lab.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import users.lab.repository.CountryRepository
import users.lab.model.Country

@RestController
@RequestMapping("/country")
class CountryController {
    @Autowired
    private lateinit var countryRepository: CountryRepository

    @GetMapping("/")
    fun getCountries(name: String) : List<Country> {
        return countryRepository.findByNameIgnoreCaseIsContainingOrCode(name).sortedBy { it.name }
    }
}