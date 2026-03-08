package backend.application.DTO.task;

import java.util.UUID;

public record TaskDTO(UUID id, String title, String description, boolean completed, UUID userId) {
    
}
