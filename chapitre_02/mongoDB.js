// Students

db.Students.insert ({
    name: "Véronique",
    ville: "Paris"
})

db.Students.insert ({
    name: "Steeven",
    ville: "Lyon"
})

db.Students.insert ({
    name: "Marc",
    ville: "Marseille"
})



db.Students.insert ({
    name: "Nour",
    ville: "Lyon"
})

db.Students.insert ({
    name: "Romain",
    ville: "Paris"
})

db.Students.insert ({
    name: "Sophie",
    ville: "Paris"
})

db.Students.find()


// Languages

db.Languages.insert ({
    name: "French"
})

db.Languages.insert ({
    name: "English"
})

db.Languages.insert ({
    name: "German"
})

db.Languages.insert ({
    name: "Spanish"
})

db.Languages.insert ({
    name: "Mandarin"
})

db.Languages.find()

// Favorites

db.Favorites.insert ({
    class: "Maths",
    sport: "Cricket",
    student_id: 2
})

db.Favorites.insert ({
    class: "Music",
    sport: "Hip-Hop",
    student_id: 6
})

db.Favorites.insert ({
    class: "Arts",
    sport: "Boxing",
    student_id: 1
})

db.Favorites.insert ({
    class: "Literature",
    sport: "Tennis",
    student_id: 3
})

db.Favorites.insert ({
    class: "Computer-science",
    sport: "Tennis",
    student_id: 5
})

db.Favorites.insert ({
    class: "Arts",
    sport: "Baseball",
    student_id: 4
})

db.Favorites.find()


