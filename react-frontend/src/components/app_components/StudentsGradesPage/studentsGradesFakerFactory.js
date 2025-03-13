
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
studentId: faker.lorem.sentence(""),
name: faker.lorem.sentence(""),
grade: faker.lorem.sentence(""),
mathGrade: faker.lorem.sentence(""),
scienceGrade: faker.lorem.sentence(""),
englishGrade: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
