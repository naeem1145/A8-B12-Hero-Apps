// get
export const loadInstalList = () => {
    try {
        const data = localStorage.getItem('instalList')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

// save
export const updateList = app => {
    const instalList = loadInstalList()

    try {
        const isDuplicate = instalList.some(p => p.id === app.id)
        if (isDuplicate) return alert('Already added in instalList')
        const updatedInstalList = [...instalList, app]
        localStorage.setItem('instalList', JSON.stringify(updatedInstalList))
    } catch (err) {
        console.log(err)
    }
}

// delete
export const removeFromInstalList = id => {
    const instalList = loadInstalList()
    try {
        const updatedInstalList = instalList.filter(p => p.id !== id)
        localStorage.setItem('instalList', JSON.stringify(updatedInstalList))
    } catch (err) {
        console.log(err)
    }
}



//