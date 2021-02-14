package hu.imosonyi.accountmanager.account;

import java.util.StringJoiner;

public class AccountDetails {

    private String id;

    private String firstname;

    private String lastname;

    private String email;

    private String phone;

    private AccountStatus status;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(AccountStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", getClass().getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("firstname=" + firstname)
                .add("lastname=" + lastname)
                .add("email=" + email)
                .add("phone=" + phone)
                .add("status=" + status)
                .toString();
    }

}
