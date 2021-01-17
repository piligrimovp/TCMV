package users.lab.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*
@Entity
@Table(name = "country", uniqueConstraints = [UniqueConstraint(columnNames = ["name"])])
class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0

    @Column(nullable = false)
    lateinit var name: String

    @Column(nullable = false)
    lateinit var code: String

    @OneToMany(mappedBy = "country")
    @JsonIgnore
    lateinit var region: Set<Region>

}
