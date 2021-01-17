package users.lab.controller

import users.lab.exception.BadRequestException
import users.lab.model.User
import users.lab.payload.ApiResponse
import users.lab.payload.AuthResponse
import users.lab.payload.LoginRequest
import users.lab.payload.SignUpRequest
import users.lab.repository.UserRepository
import users.lab.security.TokenProvider
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import javax.validation.Valid

@RestController
@RequestMapping("/auth")
class AuthController {
    @Autowired
    private val authenticationManager: AuthenticationManager? = null

    @Autowired
    private val userRepository: UserRepository? = null

    @Autowired
    private val passwordEncoder: PasswordEncoder? = null

    @Autowired
    private val tokenProvider: TokenProvider? = null

    @PostMapping("/login")
    fun authenticateUser(@RequestBody loginRequest: @Valid LoginRequest?): ResponseEntity<*>? {
        val authentication = authenticationManager!!.authenticate(
            UsernamePasswordAuthenticationToken(
                loginRequest?.email,
                loginRequest?.password
            )
        )
        SecurityContextHolder.getContext().authentication = authentication
        val token = tokenProvider!!.createToken(authentication)
        return ResponseEntity.ok<Any>(AuthResponse(token))
    }

    @PostMapping("/signup")
    fun registerUser(@RequestBody signUpRequest: @Valid SignUpRequest): ResponseEntity<Any>? {
        if (userRepository!!.existsByEmail(signUpRequest.email)!!) {
            throw BadRequestException("Данный email уже используется.")
        }

        val user = User()
        user.name = signUpRequest.name.toString()
        user.email = signUpRequest.email.toString()
        user.password = signUpRequest.password.toString()
        user.password = (passwordEncoder!!.encode(user.password))
        val result = userRepository.save(user)
        val location = result.let {
            ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(it.id).toUri()
        }
        return location.let {
            ResponseEntity.created(it)
                .body(ApiResponse(true, "Пользователь создан"))
        }
    }
}