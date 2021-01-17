package users.lab.security

import users.lab.model.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.core.user.OAuth2User


class UserPrincipal(
    val id: Long,
    private val email: String,
    private val password: String,
    private val emailVerified: Boolean,
    private val authorities: Collection<GrantedAuthority>
) :
    OAuth2User, UserDetails {
    private var attributes: Map<String, Any>? = null
    override fun getPassword(): String {
        return password
    }

    override fun getUsername(): String {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return emailVerified
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return authorities
    }

    override fun getAttributes(): Map<String, Any> {
        return attributes!!
    }

    fun setAttributes(attributes: Map<String, Any>?) {
        this.attributes = attributes
    }

    override fun getName(): String {
        return id.toString()
    }

    fun isVerified(): Boolean {
        return false
    }

    companion object {
        fun create(user: User): UserPrincipal {
            val authorities: List<GrantedAuthority> = listOf(SimpleGrantedAuthority("ROLE_USER"))
            return UserPrincipal(
                user.id,
                user.email,
                user.password,
                user.emailVerified,
                authorities
            )
        }

        fun create(user: User, attributes: Map<String, Any>?): UserPrincipal {
            val userPrincipal = create(user)
            userPrincipal.setAttributes(attributes)
            return userPrincipal
        }
    }
}
