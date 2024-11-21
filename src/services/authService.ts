const users: any[] = [];

export const loginUser = async (loginData: { username: string, password: string }) => {
    const user = users.find(u => u.username === loginData.username && u.password === loginData.password);
    if (!user) throw new Error('User not found');
    return { username: user.username, message: 'Login successful' };
};

export const registerUser = async (registerData: { username: string, password: string }) => {
    const existingUser = users.find(u => u.username === registerData.username);
    if (existingUser) throw new Error('User already exists');
    users.push(registerData);
    return { username: registerData.username, message: 'User registered successfully' };
};
