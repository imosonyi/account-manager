package hu.imosonyi.accountmanager.account;

import org.springframework.web.bind.annotation.ResponseStatus;

import static java.lang.String.format;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@ResponseStatus(NOT_FOUND)
public class AccountNotFoundException extends RuntimeException {

    private static final String MESSAGE = "Account with id=%s not found!";

    public AccountNotFoundException(String id) {
        super(format(MESSAGE, id));
    }

}
