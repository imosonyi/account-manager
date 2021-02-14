package hu.imosonyi.accountmanager.account;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.time.Instant;

import static org.mapstruct.InjectionStrategy.CONSTRUCTOR;

@Mapper(
        componentModel = "spring",
        injectionStrategy = CONSTRUCTOR,
        imports = {
                Instant.class
        }
)
public interface AccountMapper {

    AccountListItem toAccountListItem(Account account);

    AccountDetails toAccountDetails(Account account);

    @Mapping(target = "createdDate", expression = "java( Instant.now() )")
    Account fromCreateAccountRequest(CreateAccountRequest createAccountRequest);

    void updateFromUpdateAccountRequest(UpdateAccountRequest updateAccountRequest, @MappingTarget Account account);

}
