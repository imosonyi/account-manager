package hu.imosonyi.accountmanager.account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders = { "location" })
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<Page<AccountListItem>> getAccounts(@RequestParam(name = "query", required = false) String query,
                                                             @PageableDefault(size = Integer.MAX_VALUE) Pageable pageable) {
        return ResponseEntity.ok(accountService.getAccounts(query, pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountDetails> getAccountById(@PathVariable("id") String id) {
        return ResponseEntity.ok(accountService.getAccountById(id));
    }

    @PostMapping
    public ResponseEntity<String> createAccount(@RequestBody CreateAccountRequest createAccountRequest) {
        return ResponseEntity.created(URI.create(accountService.createAccount(createAccountRequest))).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateAccount(@PathVariable("id") String id, @RequestBody UpdateAccountRequest updateAccountRequest) {
        accountService.updateAccount(id, updateAccountRequest);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable("id") String id) {
        accountService.deleteAccount(id);
        return ResponseEntity.noContent().build();
    }

}
