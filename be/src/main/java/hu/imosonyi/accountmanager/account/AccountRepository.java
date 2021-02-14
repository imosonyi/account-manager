package hu.imosonyi.accountmanager.account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends MongoRepository<Account, String> {

    @Query(" {" +
            "  $or: [" +
            "    { 'firstname' : { $regex : ?0 } }, " +
            "    { 'lastname' : { $regex : ?0 } }, " +
            "    { 'email' : { $regex : ?0 } }, " +
            "    { 'phone' : { $regex : ?0 } }, " +
            "    { 'status' : { $regex : ?0 } }" +
            "  ]" +
            "}")
    Page<Account> findMatching(String query, Pageable pageable);

}
