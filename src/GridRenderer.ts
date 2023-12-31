// Copyright 2023 Geoid
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



/**
 * A class responsible for rendering a Grid.
 */
 class GridRenderer<T> {
    /**
     * Create a new GridRenderer.
     * @param private grid - The Grid to render.
     */
    constructor(private grid: Grid<T>) {}

    /**
     * Render the grid to the console.
     * @param transform - An optional function to transform grid items to strings.
     */
    render(transform?: (item: T) => string): void {
        this.grid.forEach((item, row, column) => {
            process.stdout.write((transform ? transform(item) : String(item)) + (column < this.grid.columns - 1 ? ' ' : '\n'));
        });
    }
}
