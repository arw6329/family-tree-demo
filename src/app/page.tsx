'use client'

import styles from "./page.module.css"
import familyTree from "#/lib/familyTree.json"
// TODO: Better way to import database type
import type { FamilyTreeDatabase } from "@reunionpage/react-family-tree/dist/lib/family-tree/FamilyTreeDatabase"
import dynamic from 'next/dynamic'
 
const FamilyTree = dynamic(
  () => import('@reunionpage/react-family-tree').then(mod => mod.FamilyTree),
  { ssr: false }
)

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>ReunionPage Family Tree Demo - Edge Build</h1>
                    <span>See <a href="https://github.com/arw6329/family-tree-renderer">https://github.com/arw6329/family-tree-renderer</a> for more info</span>
                </div>
                <FamilyTree database={familyTree as FamilyTreeDatabase} />
            </main>
        </div>
    )
}
