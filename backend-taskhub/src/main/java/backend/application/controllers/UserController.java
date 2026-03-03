package backend.application.controllers;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.application.DTO.UserDTOComplete;
import backend.application.models.UserModel;
import backend.application.repositories.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
    UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // CRUD completo de usuários
    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody UserModel entity) {
        userRepository.save(entity);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário criado com sucesso!");
    }

    @GetMapping("/getOne")
    public ResponseEntity<?> getOneUser(@RequestParam String email) {
        return ResponseEntity.status(HttpStatus.OK).body(userRepository.findByEmail(email));
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(userRepository.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable UUID id, @RequestBody UserDTOComplete entity) {

        UserModel user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        user.setEmail(entity.email());
        user.setName(entity.name());
        user.setPassword(entity.password());
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.OK).body("Usuário atualizado com sucesso!");
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable UUID id) {
        if(!userRepository.existsById(id)) {
            throw new RuntimeException("Usuário não encontrado!");
        }
        userRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Usuário deletado com sucesso!");
    }
}
