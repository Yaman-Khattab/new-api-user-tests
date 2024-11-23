import { expect, test } from '@playwright/test';
import { userArrayData, userData } from "./data/user";

// Base URL for the User API
const baseURL = 'http://host.docker.internal:8080/api/v3';


test.describe('User API Tests', () => {

  test('Create a new user', async ({ request }) => {
    const response = await request.post(`${baseURL}/user`, {
      data: userData,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.username).toBe(userData.username);
    expect(responseBody.firstName).toBe(userData.firstName);
    expect(responseBody.email).toBe(userData.email);
  });

  test('Get a user by username', async ({ request }) => {
    const response = await request.get(`${baseURL}/user/${userData.username}`);

    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.username).toBe(userData.username);
    expect(user.firstName).toBe(userData.firstName);
    expect(user.email).toBe(userData.email);
  });

  test('Update an existing user', async ({ request }) => {
    const updatedUserData = {
      ...userData,
      firstName: 'Yaman',
      lastName: 'Khattab'
    };

    const response = await request.put(`${baseURL}/user/${userData.username}`, {
      data: updatedUserData,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.firstName).toBe('Yaman');
    expect(responseBody.lastName).toBe('Khattab');
  });

  test('Login a user', async ({ request }) => {
    const response = await request.get(`${baseURL}/user/login?username=${userData.username}&password=${userData.password}`);

    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toContain('Logged in user session');
  });

  test('Log out a user', async ({ request }) => {
    const response = await request.get(`${baseURL}/user/logout`);

    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toBe('User logged out');
  });

  test('Delete a user', async ({ request }) => {
    const response = await request.delete(`${baseURL}/user/${userData.username}`);
    expect(response.status()).toBe(200);

    // Check that the user is deleted by trying to retrieve it
    const getResponse = await request.get(`${baseURL}/user/${userData.username}`);

    // Should return 404 since the user is deleted
    expect(getResponse.status()).toBe(404);
  });

  test('Create multiple users with list', async ({ request }) => {
    const response = await request.post(`${baseURL}/user/createWithList`, {
      data: userArrayData,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    // Expecting two users to be created
    expect(responseBody.length).toBe(2);
    expect(responseBody[0].username).toBe(userArrayData[0].username);
    expect(responseBody[1].username).toBe(userArrayData[1].username);
  });
});
