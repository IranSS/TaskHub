package backend.application.controllers;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import backend.application.DTO.task.TaskDTO;
import backend.application.models.TaskModel;
import backend.application.repositories.TaskRepository;

@Controller
@RequestMapping("/tasks")
public class TaskController {

    TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    // operações de CRUD para tarefas

    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody TaskDTO entity){
        TaskModel task = new TaskModel();

        task.setTitle(entity.title());
        task.setDescription(entity.description());
        task.setCompleted(entity.completed());

        taskRepository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body("Tarefa criada com sucesso!");
    }

    @GetMapping("/getOne")
    public ResponseEntity<?> getTaskId(@RequestParam UUID id) {
        return ResponseEntity.status(HttpStatus.FOUND).body(taskRepository.findById(id));
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllTasks(){
        return ResponseEntity.status(HttpStatus.FOUND).body(taskRepository.findAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTask(@PathVariable UUID id, @RequestBody TaskDTO entity) {
        TaskModel task = taskRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));

        task.setTitle(entity.title());
        task.setDescription(entity.description());
        task.setCompleted(entity.completed());
        taskRepository.save(task);

        return ResponseEntity.status(HttpStatus.OK).body("Tarefa atualizada com sucesso!");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable UUID id) {
        if(!taskRepository.existsById(id)) {
            throw new RuntimeException("Tarefa não encontrada!");
        }
        taskRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Tarefa deletada com sucesso!");
    }
}
