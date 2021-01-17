package users.lab.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component


@Component
@ConfigurationProperties(prefix = "app")
class AppProperties {
    val auth = Auth()

    class Auth {
        lateinit var tokenSecret: String
        var tokenExpirationMSec: Long = 0
    }
}