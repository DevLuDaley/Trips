//import list namespace/module
using System.Collections.Generic;

namespace Trips.Data
{
    public interface ITripService
    {
        // ! here we define all the methods that we will use

        // method to get a list of trips
        List<Trip> GetAllTrips();

        Trip GetTripById(int tripId);

        //use void because we dont want to return anything
        //args include tripID and new trip data
        void UpdateTrip(int TripId, Trip trip);
        void DeleteTrip(int TripId);
        void AddTrip(Trip trip);
    }
}