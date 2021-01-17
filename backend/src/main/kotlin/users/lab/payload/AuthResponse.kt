package users.lab.payload

class AuthResponse(var accessToken: String) {
    var tokenType = "Bearer"
}