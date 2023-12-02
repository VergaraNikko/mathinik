package com.csit321g2.vergara.Service;

import java.util.List;

import com.csit321g2.vergara.Entity.User;

public interface UserService {
	User createUser(User user);
    User getUser(int userid);
    User updateUser(int userid, User user);
    void deleteUser(int userid);
	List<User> getAllUsers();
	User authenticateUser(String username, String password);
	
}
