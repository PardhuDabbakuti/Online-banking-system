package com.bank.service;

import com.bank.model.Account;
import com.bank.repository.AccountRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AccountService {
    private final AccountRepository repo;
    public AccountService(AccountRepository repo) { this.repo = repo; }
    public List<Account> findAll() { return repo.findAll(); }
    public Account save(Account acc) { return repo.save(acc); }
}