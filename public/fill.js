Bitmap.prototype.fill = function(row, col, new_color) {
    // Implement this method.
    const old_color = this.grid[row][col];
    if(old_color === new_color) return;

    this.setColor(row, col, new_color);
    var queue = [[row, col]];
    while(queue.length > 0) {
        [r,c] = queue.shift();
        var neighbors = [[r-1, c], [r, c-1], [r, c+1], [r+1, c]];
        while(neighbors.length > 0) {
            var n_r, n_c;
            [n_r, n_c] = neighbors.shift();
            if(this.grid[n_r] && this.grid[n_r][n_c] === old_color) {
                this.setColor(n_r, n_c, new_color);
                queue.push([n_r, n_c]);
            }
        }
    }
}