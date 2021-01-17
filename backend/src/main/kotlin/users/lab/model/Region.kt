package users.lab.model

import javax.persistence.*
@Entity
@Table(name = "region", uniqueConstraints = [UniqueConstraint(columnNames = ["name"])])
class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0

    @Column(nullable = false)
    lateinit var name: String

    @Column(nullable = false)
    lateinit var code: String

    @ManyToOne(optional = false)
    @JoinColumn(name = "country_id", nullable = false)
    private lateinit var country: Country

    override fun toString(): String {
        return "${country.name} (${name})"
    }
}
