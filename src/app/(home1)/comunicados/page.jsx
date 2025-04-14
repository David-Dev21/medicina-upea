'use client';
import BlogSection from "../../Components/BlogsSection";
import Section from "../../Components/Section";
import { useState, useEffect } from 'react';

const Page = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await fetch('https://serviciopagina.upea.bo/api/convocatoriasAll/14');
                const blogData = await blogResponse.json();
                setBlogPosts(blogData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filterPostsByType = (type) => {
        return blogPosts.filter(post => post.con_titulo.toUpperCase().includes(type));
    };

    const comunicados = {
        sectionTitle: 'COMUNICADOS',
        sectionSubtitle: 'Últimos Comunicados',
        postsData: filterPostsByType('COMUNICADO').map(post => ({
            title: post.con_titulo,
            subtitle: post.con_descripcion,
            date: new Date(post.con_fecha_inicio).toLocaleDateString(),
            thumbnail: `https://serviciopagina.upea.bo/Convocatorias/${post.con_foto_portada}`,
            category: post.con_estado,
            postLink: '',
            authorIcon: '/assets/img/icons/post_user_icon.png',
            commentIcon: '/assets/img/icons/post_comment_icon.png'
        }))
    };

    const diplomados = {
        sectionTitle: 'DIPLOMADOS',
        sectionSubtitle: 'Últimos Diplomados',
        postsData: filterPostsByType('DIPLOMADO').map(post => ({
            subtitle: post.con_descripcion,
            date: new Date(post.con_fecha_inicio).toLocaleDateString(),
            thumbnail: `https://serviciopagina.upea.bo/Convocatorias/${post.con_foto_portada}`,
            category: post.con_estado,
            postLink: '#',
            authorIcon: '/assets/img/icons/post_user_icon.png',
            commentIcon: '/assets/img/icons/post_comment_icon.png'
        }))
    };

    const convocatorias = {
        sectionTitle: 'CONVOCATORIAS',
        sectionSubtitle: 'Últimas Convocatorias',
        postsData: filterPostsByType('CONVOCATORIA').map(post => ({
            subtitle: post.con_descripcion,
            date: new Date(post.con_fecha_inicio).toLocaleDateString(),
            thumbnail: `https://serviciopagina.upea.bo/Convocatorias/${post.con_foto_portada}`,
            category: post.con_estado,
            postLink: '',
            authorIcon: '/assets/img/icons/post_user_icon.png',
            commentIcon: '/assets/img/icons/post_comment_icon.png'
        }))
    };

    return (
        <div>
            {comunicados.postsData.length > 0 && (
                <Section
                    topSpaceLg="10"
                    topSpaceMd="30"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                >
                    <BlogSection data={comunicados} />
                </Section>
            )}

            {diplomados.postsData.length > 0 && (
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                >
                    <BlogSection data={diplomados} />
                </Section>
            )}

            {convocatorias.postsData.length > 0 && (
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                >
                    <BlogSection data={convocatorias} />
                </Section>
            )}
        </div>
    );
};

export default Page;
