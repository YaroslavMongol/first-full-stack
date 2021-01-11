package com.example.transactions.controller;

import com.example.transactions.model.Transaction;
import com.example.transactions.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;


    @GetMapping("/")
    public List<Transaction> getAll(){
        return transactionRepository.findAll();
    }

    @PostMapping("/add")
    public Transaction addTransaction (@RequestBody Transaction transaction ){
        return transactionRepository.save(transaction);
    }
}
