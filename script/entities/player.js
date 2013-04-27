var player = (function () {
    
    var update, spawn, alive;
    
    update = function (delta, ctx) {
        draw.dot(ctx, {
            x: this.x,
            y: this.y,
            r: this.r,
            color: 'green'
        });
    };
    
    alive = function () {
        return (this.life > 0);
    };
    
    spawn = function (options) {
        return {
            update: update,
            alive: alive,
            collisionCheck: mixins.collisionCheck,
            x: 300,
            y: 200,
            r: 45,
            life: 10
        };
    };
    
    return {
        spawn: spawn
    };
    
}());