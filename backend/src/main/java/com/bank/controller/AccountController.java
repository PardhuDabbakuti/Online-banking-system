package com.bank.controller;

import com.bank.model.Account;
import com.bank.service.AccountService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "*")
public class AccountController {
    private final AccountService service;
    public AccountController(AccountService service) { this.service = service; }
    @GetMapping
    public List<Account> getAll() { return service.findAll(); }
    @PostMapping
    public Account create(@RequestBody Account acc) { return service.save(acc); }
}