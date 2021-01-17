package users.lab.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotNull


@Entity
@Table(name = "users", uniqueConstraints = [UniqueConstraint(columnNames = ["email"])])
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0

    @Column(nullable = false)
    lateinit var name: String

    @Email
    @Column(nullable = false)
    lateinit var email: String

    var imageUrl: String? = ""

    @Column(nullable = false)
    @JsonIgnore
    var emailVerified = false

    @JsonIgnore
    lateinit var password: String

    @NotNull
    var role = Role.NoRole

}
