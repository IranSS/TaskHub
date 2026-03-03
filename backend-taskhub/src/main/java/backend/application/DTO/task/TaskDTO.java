package backend.application.DTO.task;

import java.util.UUID;

public record TaskDTO(String title, String description, boolean completed, UUID userId) {
    
}
