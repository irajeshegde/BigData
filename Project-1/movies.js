db.createCollection("Movies");
db.Movies.insertMany([{
    name: "Titanic",
    imdb: 8,
    year: 1997,
    director: "James Cameron",
    actors: {
        maleLead: "Leonardo DiCaprio",
        femaleLead: "Kate Winslet"
    },
    category: ["Romance", "Tragedy", "Disaster", "Love"],
    awards: ["Golden Globe", "Academy", "ASC"],
    critics: {
        "Good": 7,
        "Best one": 8,
        "Amazing": 8,
        "Super": 9,
        "Very good": 9
    }
}, {
    name: "The Shawshank Redemption",
    imdb: 9.3,
    year: 1994,
    director: "Frank Darabont",
    actors: {
        maleLead: "Tim Robbins",
        secondLead: "Morgan Freeman"
    },
    category: "Drama",
    awards: "20/20",
    critics: {
        "Vey Good": 9,
        "Great": 8,
        "Amazing movie": 8,
        "Excellent": 10,
        "Fantastic": 10
    }
}, {
    name: "The Godfather",
    imdb: 9.3,
    year: 1972,
    director: "Francis Ford Coppola",
    actors: {
        maleLead: "Marlon Brando",
        secondLead: "Al Pacino"
    },
    category: ["Crime", "Drama"],
    awards: "Oscar",
    critics: {
        "Good": 7,
        "Great": 8,
        "Amazing": 8,
        "Excellent": 10,
        "Fantastic": 10
    }
}, {
    name: "The Dark Knight",
    imdb: 9,
    year: 2008,
    director: "Christopher Nolan",
    actors: "Christian Bale",
    category: ["Action", "Crime", "Drama"],
    awards: ["Oscar", "Golden Globe", "Academy", "ASC"],
    critics: {
        "Bad": 4,
        "Worst": 3,
        "Terrible": 1,
        "Good": 7,
        "Great": 8
    }
}, {
    name: "Pulp Fiction",
    imdb: 8.9,
    year: 1994,
    director: "Quentin Tarantino",
    actors: {
        maleLead: "John Travolta",
        femaleLead: "Uma Thurman"
    },
    category: ["Crime", "Drama"],
    awards: "Oscar",
    critics: {
        "Great": 8,
        "Good Movie": 8,
        "Worst": 3,
        "Good": 7,
        "Bad": 4
    }
}, {
    name: "Parasite",
    imdb: 8.6,
    year: 2019,
    director: "Bong Joon Ho",
    actors: {
        maleLead: "Kang Ho Sung",
        femaleLead: "Park So Dam"
    },
    category: ["Comedy", "Drama", "Thriller"],
    awards: ["Golden Globe", "Academy", "ASC"],
    critics: {
        "The Best movie": 9,
        "Must watch": 8,
        "Amazing": 8,
        "Fantastic": 10,
        "Excellent": 10
    }
}, {
    name: "Finding Nemo",
    imdb: 8.1,
    year: 2003,
    director: "Andrew Stanton",
    actors: {
        maleLead: "Albert Brooks",
        femaleLead: "Ellen DeGeneres"
    },
    category: ["Animation", "Adventure", "Comedy"],
    awards: ["Golden Globe", "Academy", "ASC"],
    critics: {
        "Never watch": 2,
        "Very Bad": 3,
        "Don't watch it": 4,
        "Could have been better one": 4,
        "Good": 7
    }
}]);