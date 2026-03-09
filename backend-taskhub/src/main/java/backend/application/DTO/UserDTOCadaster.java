package backend.application.DTO;

import backend.application.models.user.UserRole;

public record UserDTOCadaster(
    String email,
    String name,
    String password,
    UserRole role
) {}
