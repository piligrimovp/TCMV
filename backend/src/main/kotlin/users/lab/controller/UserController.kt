package users.lab.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import users.lab.exception.ResourceNotFoundException
import users.lab.model.User
import users.lab.repository.UserRepository
import users.lab.security.CurrentUser
import users.lab.security.UserPrincipal

@RestController
class UserController {
    @Autowired
    private lateinit var userRepository: UserRepository
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    fun getCurrentUser(@CurrentUser userPrincipal: UserPrincipal): User? {
        return userRepository.findById(userPrincipal.id)
            .orElseThrow { ResourceNotFoundException("User", "id", userPrincipal.id) }
    }
}
