import { Container } from "unstated"

class PetsContainer extends Container{
    state = {
        pets: [],
        favorites: []
    }

    swipeRight = (e) => {
        this.setState(prevState => ({
            favorites: [...prevState.favorites, e]
        }))
    }

    swipeLeft = (e) => {
        var initialPets = [...this.state.pets]
        var newPets = initialPets.indexOf(e.id-1)
        if (newPets !== -1) {
          initialPets.splice(newPets, 1);
          this.setState({pets: initialPets});
        }
    }
}

export { PetsContainer }