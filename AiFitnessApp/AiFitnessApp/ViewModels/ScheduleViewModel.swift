// ScheduleViewModel.swift
import Foundation

class ScheduleViewModel: ObservableObject {
    @Published var schedule = Schedule(days: [:])
    
    func generateSchedule(for user: User) {
        // Call PredictionService and populate schedule
    }
}
