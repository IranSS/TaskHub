package backend.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.application.DTO.LoginDTO;
import backend.application.config.Token.JwtService;
import backend.application.models.user.UserModel;
import backend.application.repositories.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    JwtService jwtService;
    UserRepository userRepository;

    AuthController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginDTO loginDTO){
        UserModel user = userRepository.findByEmail(loginDTO.email())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        if(loginDTO.email().equals(user.getEmail())  &&
           loginDTO.password().equals(user.getPassword())) {
            return "token" + ": " + jwtService.generateToken(loginDTO.email());
        }
        
        throw new RuntimeException("Credenciais inválidas");
    }
}
