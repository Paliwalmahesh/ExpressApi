import { compare, hash } from 'bcrypt';
import { sign as jwt } from "jsonwebtoken";
import { v4 as uuid } from 'uuid';

type User = {
    id: string;
    email: string;
    password: string;
};
const users: User[] = []

export async function signup(authData: User) {
    console.log("called");

    const { email, password } = authData
    const hasedPassword = await hash(password, 10)
    const id = uuid()
    users.push({
        id: id,
        email: email,
        password: hasedPassword
    })
    console.log(users);

    return users;
}

export async function signin(authData: { email: string; password: string }) {
    const { email, password } = authData
    const foundUser = users.find((user) => user.email === email)

    if (!foundUser) {
        console.log("Invalid Userid")
    }
    if (!compare(password, foundUser.password)) {
        console.log("Invalid password")
    }
    const payLoad = {
        email: foundUser.email,
        password: foundUser.password,
    }

    const access_token = jwt(payLoad, 'secret')

    return access_token

}