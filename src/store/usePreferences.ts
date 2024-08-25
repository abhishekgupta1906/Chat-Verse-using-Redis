//  import {create} from "zustand";

//  export const usePreferences=create((set)=>({ 
//     soundEnabled:true,
//     setSoundEnabled:(soundEnabled :boolean)=>set({ soundEnabled}),
//  }))
import { create } from "zustand";

type Preferences = {
	soundEnabled: boolean;
	setSoundEnabled: (soundEnabled: boolean) => void;
};

export const usePreferences = create<Preferences>((set) => ({
	soundEnabled: true,
	setSoundEnabled: (soundEnabled: boolean) => set({ soundEnabled }),
}));