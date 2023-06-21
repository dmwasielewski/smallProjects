# Password generator


This code provides the following functionality:

- The user can generate passwords or PINs using a password generator.
- The password generator has the ability to generate passwords with a specified character range.
- The user can specify the length of the generated password or PIN. By default, it generates an 8-character password.
- If the specified count is not a number, an error message is thrown indicating wrong data.
- If the specified count is less than 4, an error message is thrown indicating that the password is too short.
- If the specified count is greater than 32, an error message is thrown indicating that the password is too long.
- The generated password or PIN is a random selection of characters from the provided character range.
- The user can also generate PINs specifically using a PIN generator class, which is a subclass of the password generator.
- The PIN generator has a predefined character range of '0123456789'.
- The user can calculate the checksum of a given PIN using the `calculateCheckSum` method.
- The code creates an instance of the PIN generator and generates a PIN with a specified length of 6 characters.

