import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';

export default [{
        input: './src/UnamiDev.ts',
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            serve({
                contentBase: 'development',
                open: true,
                historyApiFallback: true
            }),
            livereload()
        ],
        output: {
            file: './development/esnext.js',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]
