# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create({
    full_name: 'Danny Demo',
    email: 'demo_user@demo_login.com',
    password: '123456'
})

User.create({
    full_name: 'Tim Kim',
    email: 'timjkim210@gmail.com',
    password: 'fire88',
    pronouns: 'he/him/his',
    role: 'Software Engineer',
    team: 'Engineering',
    about: 'Hi. My name is Tim. I like basketball!'
})