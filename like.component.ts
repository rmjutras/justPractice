export class LikeComponent {
    constructor(private _numLikes: number, private _liked: boolean = false) {}

    click() {
        this._numLikes += (this._liked) ? -1 : 1;
        // (this.liked) ? this.numLikes-- : this.numLikes++;
        this._liked = !this._liked;
    }

    get numLikes(): number {
        return this._numLikes;
    }

    get liked(): boolean {
        return this._liked;
    }

    set numLikes(val: number) {
        if (val >=0) {
            this._numLikes = val
        }
        else {
            throw new Error ("Number of likes must be number greater than zero")
        }
    }
}