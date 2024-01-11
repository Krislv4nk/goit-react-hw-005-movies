import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/API";

export const App = () => {
getTrendingMovies ().then((data) => console.log(data))
    return (
        <div>
            <h1>App</h1>
        </div>
    )
}