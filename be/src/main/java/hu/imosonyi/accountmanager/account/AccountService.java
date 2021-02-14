package hu.imosonyi.accountmanager.account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;

    public AccountService(AccountRepository accountRepository,
                          AccountMapper accountMapper) {
        this.accountRepository = accountRepository;
        this.accountMapper = accountMapper;
    }

    public Page<AccountListItem> getAccounts(String query, Pageable pageable) {
        return Optional.ofNullable(query)
                .map(q -> accountRepository.findMatching(q, pageable))
                .orElse(accountRepository.findAll(pageable))
                .map(accountMapper::toAccountListItem);
    }

    public AccountDetails getAccountById(String id) {
        return accountRepository.findById(id)
                .map(accountMapper::toAccountDetails)
                .orElseThrow(() -> new AccountNotFoundException(id));
    }

    public String createAccount(CreateAccountRequest createAccountRequest) {
        return accountRepository.save(accountMapper.fromCreateAccountRequest(createAccountRequest)).getId();
    }

    public void updateAccount(String id, UpdateAccountRequest updateAccountRequest) {
        accountRepository.save(
                accountRepository.findById(id)
                        .stream()
                        .peek(account -> accountMapper.updateFromUpdateAccountRequest(updateAccountRequest, account))
                        .findAny()
                        .orElseThrow(() -> new AccountNotFoundException(id))
        );
    }

    public void deleteAccount(String id) {
        accountRepository.deleteById(id);
    }

}
