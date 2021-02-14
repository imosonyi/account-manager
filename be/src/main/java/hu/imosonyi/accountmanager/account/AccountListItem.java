package hu.imosonyi.accountmanager.account;

import java.time.Instant;
import java.util.StringJoiner;

public class AccountListItem {

    private String id;

    private String firstname;

    private String lastname;

    private AccountStatus status;

    private Instant createdDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(AccountStatus status) {
        this.status = status;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", getClass().getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("firstname=" + firstname)
                .add("lastname=" + lastname)
                .add("status=" + status)
                .add("createdDate=" + createdDate)
                .toString();
    }

}
