import useSound from "use-sound";
import {useEffect} from "react";

export const Sound = ({ sound, pause }: { sound: string; pause: boolean }) => {
    const [play, { stop }] = useSound(sound, {interrupt: true, volume: .3, loop: true});

    useEffect(() => {
        window.sessionStorage.setItem('PAUSE_SOUND', `${pause}`);
        if (pause) {
            return stop();
        }
        return play();
    }, [play, stop, pause]);

    return null;
}