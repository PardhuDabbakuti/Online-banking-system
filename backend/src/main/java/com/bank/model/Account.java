package com.bank.model;

import jakarta.persistence.*;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String owner;
    private Double balance;

    public Account() {}
    public Account(String owner, Double balance) {
        this.owner = owner;
        this.balance = balance;
    }
    public Long getId() { return id; }
    public String getOwner() { return owner; }
    public Double getBalance() { return balance; }
    public void setOwner(String owner) { this.owner = owner; }
    public void setBalance(Double balance) { this.balance = balance; }
}