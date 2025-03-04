'use client'

import { FamilyTree } from "@reunionpage/react-family-tree"
import styles from "./page.module.css"
import familyTree from "#/lib/familyTree.json"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>ReunionPage Family Tree Demo</h1>
                    <span>See <a href="https://github.com/arw6329/family-tree-renderer">https://github.com/arw6329/family-tree-renderer</a> for more info</span>
                </div>
                <FamilyTree database={familyTree} />
            </main>
        </div>
    )
}
